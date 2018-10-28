import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDuoElement
 * @class IconBaselineDuoElement
 * @extends {AoflElement}
 */
class IconBaselineDuoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDuoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-duo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDuoElement.is, IconBaselineDuoElement);

export default IconBaselineDuoElement;
