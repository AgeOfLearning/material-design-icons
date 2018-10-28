import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubtitlesElement
 * @class IconSharpSubtitlesElement
 * @extends {AoflElement}
 */
class IconSharpSubtitlesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubtitlesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subtitles';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubtitlesElement.is, IconSharpSubtitlesElement);

export default IconSharpSubtitlesElement;
