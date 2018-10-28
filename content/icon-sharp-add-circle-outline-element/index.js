import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddCircleOutlineElement
 * @class IconSharpAddCircleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpAddCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddCircleOutlineElement.is, IconSharpAddCircleOutlineElement);

export default IconSharpAddCircleOutlineElement;
