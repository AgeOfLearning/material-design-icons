import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBusinessCenterElement
 * @class IconOutlineBusinessCenterElement
 * @extends {AoflElement}
 */
class IconOutlineBusinessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBusinessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-business-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBusinessCenterElement.is, IconOutlineBusinessCenterElement);

export default IconOutlineBusinessCenterElement;
