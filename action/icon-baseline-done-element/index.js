import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDoneElement
 * @class IconBaselineDoneElement
 * @extends {AoflElement}
 */
class IconBaselineDoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDoneElement.is, IconBaselineDoneElement);

export default IconBaselineDoneElement;
