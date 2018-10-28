import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBrightnessMediumElement
 * @class IconTwotoneBrightnessMediumElement
 * @extends {AoflElement}
 */
class IconTwotoneBrightnessMediumElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBrightnessMediumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-brightness-medium';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBrightnessMediumElement.is, IconTwotoneBrightnessMediumElement);

export default IconTwotoneBrightnessMediumElement;
