class BaseConfig:
    """ Base configuration """
    TESTING = False

class DevelopmentConfig(BaseConfig):
    """ Developement configuration """
    pass

class TestingConfig(BaseConfig):
    """ Testing configuration """
    TESTING = True

class ProductionConfig(BaseConfig):
    """ Production configuration """
    pass



