import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAudiotrackElement
 * @class IconRoundAudiotrackElement
 * @extends {AoflElement}
 */
class IconRoundAudiotrackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAudiotrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-audiotrack';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAudiotrackElement.is, IconRoundAudiotrackElement);

export default IconRoundAudiotrackElement;
