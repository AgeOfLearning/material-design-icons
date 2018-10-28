import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallEndElement
 * @class IconSharpCallEndElement
 * @extends {AoflElement}
 */
class IconSharpCallEndElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallEndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-end';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallEndElement.is, IconSharpCallEndElement);

export default IconSharpCallEndElement;
