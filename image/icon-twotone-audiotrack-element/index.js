import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAudiotrackElement
 * @class IconTwotoneAudiotrackElement
 * @extends {AoflElement}
 */
class IconTwotoneAudiotrackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAudiotrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-audiotrack';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAudiotrackElement.is, IconTwotoneAudiotrackElement);

export default IconTwotoneAudiotrackElement;
