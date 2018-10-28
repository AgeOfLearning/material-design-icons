import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDoneOutlineElement
 * @class IconSharpDoneOutlineElement
 * @extends {AoflElement}
 */
class IconSharpDoneOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDoneOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-done-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDoneOutlineElement.is, IconSharpDoneOutlineElement);

export default IconSharpDoneOutlineElement;
