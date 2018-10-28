import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGroupWorkElement
 * @class IconTwotoneGroupWorkElement
 * @extends {AoflElement}
 */
class IconTwotoneGroupWorkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGroupWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-group-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGroupWorkElement.is, IconTwotoneGroupWorkElement);

export default IconTwotoneGroupWorkElement;
