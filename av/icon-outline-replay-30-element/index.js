import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplay30Element
 * @class IconOutlineReplay30Element
 * @extends {AoflElement}
 */
class IconOutlineReplay30Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplay30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-replay-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplay30Element.is, IconOutlineReplay30Element);

export default IconOutlineReplay30Element;
