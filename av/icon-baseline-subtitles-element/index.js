import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSubtitlesElement
 * @class IconBaselineSubtitlesElement
 * @extends {AoflElement}
 */
class IconBaselineSubtitlesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSubtitlesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-subtitles';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSubtitlesElement.is, IconBaselineSubtitlesElement);

export default IconBaselineSubtitlesElement;
