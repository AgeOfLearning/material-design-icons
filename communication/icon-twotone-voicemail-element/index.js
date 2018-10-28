import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVoicemailElement
 * @class IconTwotoneVoicemailElement
 * @extends {AoflElement}
 */
class IconTwotoneVoicemailElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVoicemailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-voicemail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVoicemailElement.is, IconTwotoneVoicemailElement);

export default IconTwotoneVoicemailElement;
