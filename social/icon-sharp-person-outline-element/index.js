import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonOutlineElement
 * @class IconSharpPersonOutlineElement
 * @extends {AoflElement}
 */
class IconSharpPersonOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-person-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonOutlineElement.is, IconSharpPersonOutlineElement);

export default IconSharpPersonOutlineElement;
