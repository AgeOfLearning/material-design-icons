import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEjectElement
 * @class IconBaselineEjectElement
 * @extends {AoflElement}
 */
class IconBaselineEjectElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-eject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEjectElement.is, IconBaselineEjectElement);

export default IconBaselineEjectElement;
