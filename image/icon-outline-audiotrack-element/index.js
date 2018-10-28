import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAudiotrackElement
 * @class IconOutlineAudiotrackElement
 * @extends {AoflElement}
 */
class IconOutlineAudiotrackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAudiotrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-audiotrack';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAudiotrackElement.is, IconOutlineAudiotrackElement);

export default IconOutlineAudiotrackElement;
