import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallEndElement
 * @class IconTwotoneCallEndElement
 * @extends {AoflElement}
 */
class IconTwotoneCallEndElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallEndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-end';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallEndElement.is, IconTwotoneCallEndElement);

export default IconTwotoneCallEndElement;
