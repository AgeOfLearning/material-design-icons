import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWorkOutlineElement
 * @class IconSharpWorkOutlineElement
 * @extends {AoflElement}
 */
class IconSharpWorkOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWorkOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-work-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWorkOutlineElement.is, IconSharpWorkOutlineElement);

export default IconSharpWorkOutlineElement;
