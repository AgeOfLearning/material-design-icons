import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDockElement
 * @class IconBaselineDockElement
 * @extends {AoflElement}
 */
class IconBaselineDockElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDockElement.is, IconBaselineDockElement);

export default IconBaselineDockElement;
