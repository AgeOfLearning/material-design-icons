import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFiberNewElement
 * @class IconBaselineFiberNewElement
 * @extends {AoflElement}
 */
class IconBaselineFiberNewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFiberNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fiber-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFiberNewElement.is, IconBaselineFiberNewElement);

export default IconBaselineFiberNewElement;
