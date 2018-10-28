import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooks3Element
 * @class IconTwotoneLooks3Element
 * @extends {AoflElement}
 */
class IconTwotoneLooks3Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooks3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooks3Element.is, IconTwotoneLooks3Element);

export default IconTwotoneLooks3Element;
