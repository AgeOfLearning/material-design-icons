import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAttachFileElement
 * @class IconSharpAttachFileElement
 * @extends {AoflElement}
 */
class IconSharpAttachFileElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAttachFileElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-attach-file';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAttachFileElement.is, IconSharpAttachFileElement);

export default IconSharpAttachFileElement;
