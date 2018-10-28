import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrightnessMediumElement
 * @class IconBaselineBrightnessMediumElement
 * @extends {AoflElement}
 */
class IconBaselineBrightnessMediumElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrightnessMediumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-brightness-medium';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrightnessMediumElement.is, IconBaselineBrightnessMediumElement);

export default IconBaselineBrightnessMediumElement;
