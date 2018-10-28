import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallEndElement
 * @class IconOutlineCallEndElement
 * @extends {AoflElement}
 */
class IconOutlineCallEndElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallEndElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-end';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallEndElement.is, IconOutlineCallEndElement);

export default IconOutlineCallEndElement;
