import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDoneOutlineElement
 * @class IconBaselineDoneOutlineElement
 * @extends {AoflElement}
 */
class IconBaselineDoneOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDoneOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-done-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDoneOutlineElement.is, IconBaselineDoneOutlineElement);

export default IconBaselineDoneOutlineElement;
