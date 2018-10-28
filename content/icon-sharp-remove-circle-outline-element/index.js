import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveCircleOutlineElement
 * @class IconSharpRemoveCircleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpRemoveCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveCircleOutlineElement.is, IconSharpRemoveCircleOutlineElement);

export default IconSharpRemoveCircleOutlineElement;
