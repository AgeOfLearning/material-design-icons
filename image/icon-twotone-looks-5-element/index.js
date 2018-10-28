import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLooks5Element
 * @class IconTwotoneLooks5Element
 * @extends {AoflElement}
 */
class IconTwotoneLooks5Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLooks5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-looks-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLooks5Element.is, IconTwotoneLooks5Element);

export default IconTwotoneLooks5Element;
