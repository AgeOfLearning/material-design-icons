import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplay5Element
 * @class IconOutlineReplay5Element
 * @extends {AoflElement}
 */
class IconOutlineReplay5Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplay5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-replay-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplay5Element.is, IconOutlineReplay5Element);

export default IconOutlineReplay5Element;
