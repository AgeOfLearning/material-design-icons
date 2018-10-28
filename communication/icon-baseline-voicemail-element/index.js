import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVoicemailElement
 * @class IconBaselineVoicemailElement
 * @extends {AoflElement}
 */
class IconBaselineVoicemailElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVoicemailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-voicemail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVoicemailElement.is, IconBaselineVoicemailElement);

export default IconBaselineVoicemailElement;
