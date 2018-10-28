import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpeakerGroupElement
 * @class IconRoundSpeakerGroupElement
 * @extends {AoflElement}
 */
class IconRoundSpeakerGroupElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpeakerGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-speaker-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpeakerGroupElement.is, IconRoundSpeakerGroupElement);

export default IconRoundSpeakerGroupElement;
