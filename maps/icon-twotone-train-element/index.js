import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTrainElement
 * @class IconTwotoneTrainElement
 * @extends {AoflElement}
 */
class IconTwotoneTrainElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-train';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTrainElement.is, IconTwotoneTrainElement);

export default IconTwotoneTrainElement;
