import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBrightnessMediumElement
 * @class IconOutlineBrightnessMediumElement
 * @extends {AoflElement}
 */
class IconOutlineBrightnessMediumElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBrightnessMediumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-brightness-medium';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBrightnessMediumElement.is, IconOutlineBrightnessMediumElement);

export default IconOutlineBrightnessMediumElement;
