import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimelapseElement
 * @class IconTwotoneTimelapseElement
 * @extends {AoflElement}
 */
class IconTwotoneTimelapseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimelapseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timelapse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimelapseElement.is, IconTwotoneTimelapseElement);

export default IconTwotoneTimelapseElement;
