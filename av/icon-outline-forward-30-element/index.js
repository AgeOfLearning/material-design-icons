import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineForward30Element
 * @class IconOutlineForward30Element
 * @extends {AoflElement}
 */
class IconOutlineForward30Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineForward30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-forward-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineForward30Element.is, IconOutlineForward30Element);

export default IconOutlineForward30Element;
