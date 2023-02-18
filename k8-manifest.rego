package kubernetes

violation[{"msg": msg}] {
    input.kind == "Deployment"
    container := input.spec.template.spec.containers[_]
    container.imagePullPolicy != "Always"
    msg := "Containers must have an image pull policy of 'Always'"
}

violation[{"msg": msg}] {
    input.kind == "Deployment"
    container := input.spec.template.spec.containers[_]
    (container.resources.limits.cpu == "" or container.resources.limits.cpu < "100m")
    (container.resources.limits.memory == "" or container.resources.limits.memory < "100Mi")
    msg := "Containers must have CPU and memory limits"
}

violation[{"msg": msg}] {
    input.kind == "Deployment"
    container := input.spec.template.spec.containers[_]
    container.livenessProbe == null
    msg := "Containers must have a liveness probe"
}

violation[{"msg": msg}] {
    input.kind == "Deployment"
    container := input.spec.template.spec.containers[_]
    container.readinessProbe == null
    msg := "Containers must have a readiness probe"
}

violation[{"msg": msg}] {
    input.kind == "Deployment"
    selector := input.spec.selector.matchLabels
    selector.app == null
    msg := "Deployments must have a label named 'app'"
}

violation[{"msg": msg}] {
    input.kind == "Pod"
    containers := input.spec.containers[_]
    containers.capabilities.add == null
    containers.securityContext.privileged != false
    msg := "Containers must not run as privileged or have added capabilities"
}

