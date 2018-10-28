import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEditAttributesElement
 * @class IconOutlineEditAttributesElement
 * @extends {AoflElement}
 */
class IconOutlineEditAttributesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEditAttributesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-edit-attributes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEditAttributesElement.is, IconOutlineEditAttributesElement);

export default IconOutlineEditAttributesElement;
