import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubtitlesElement
 * @class IconTwotoneSubtitlesElement
 * @extends {AoflElement}
 */
class IconTwotoneSubtitlesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubtitlesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subtitles';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubtitlesElement.is, IconTwotoneSubtitlesElement);

export default IconTwotoneSubtitlesElement;
