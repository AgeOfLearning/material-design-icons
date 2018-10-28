import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAudiotrackElement
 * @class IconBaselineAudiotrackElement
 * @extends {AoflElement}
 */
class IconBaselineAudiotrackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAudiotrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-audiotrack';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAudiotrackElement.is, IconBaselineAudiotrackElement);

export default IconBaselineAudiotrackElement;
