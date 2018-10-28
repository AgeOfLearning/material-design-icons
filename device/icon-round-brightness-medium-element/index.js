import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightnessMediumElement
 * @class IconRoundBrightnessMediumElement
 * @extends {AoflElement}
 */
class IconRoundBrightnessMediumElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightnessMediumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-medium';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightnessMediumElement.is, IconRoundBrightnessMediumElement);

export default IconRoundBrightnessMediumElement;
