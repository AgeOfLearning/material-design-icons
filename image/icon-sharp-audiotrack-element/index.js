import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAudiotrackElement
 * @class IconSharpAudiotrackElement
 * @extends {AoflElement}
 */
class IconSharpAudiotrackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAudiotrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-audiotrack';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAudiotrackElement.is, IconSharpAudiotrackElement);

export default IconSharpAudiotrackElement;
