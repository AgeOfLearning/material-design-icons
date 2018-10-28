import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSpeakerElement
 * @class IconRoundSpeakerElement
 * @extends {AoflElement}
 */
class IconRoundSpeakerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSpeakerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-speaker';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSpeakerElement.is, IconRoundSpeakerElement);

export default IconRoundSpeakerElement;
