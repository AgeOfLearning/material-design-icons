import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubtitlesElement
 * @class IconOutlineSubtitlesElement
 * @extends {AoflElement}
 */
class IconOutlineSubtitlesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubtitlesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subtitles';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubtitlesElement.is, IconOutlineSubtitlesElement);

export default IconOutlineSubtitlesElement;
