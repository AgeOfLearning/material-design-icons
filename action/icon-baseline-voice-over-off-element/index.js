import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineVoiceOverOffElement
 * @class IconBaselineVoiceOverOffElement
 * @extends {AoflElement}
 */
class IconBaselineVoiceOverOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineVoiceOverOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-voice-over-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineVoiceOverOffElement.is, IconBaselineVoiceOverOffElement);

export default IconBaselineVoiceOverOffElement;
