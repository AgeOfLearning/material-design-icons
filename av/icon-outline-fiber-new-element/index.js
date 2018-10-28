import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFiberNewElement
 * @class IconOutlineFiberNewElement
 * @extends {AoflElement}
 */
class IconOutlineFiberNewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFiberNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fiber-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFiberNewElement.is, IconOutlineFiberNewElement);

export default IconOutlineFiberNewElement;
