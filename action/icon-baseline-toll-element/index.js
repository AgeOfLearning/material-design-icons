import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTollElement
 * @class IconBaselineTollElement
 * @extends {AoflElement}
 */
class IconBaselineTollElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-toll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTollElement.is, IconBaselineTollElement);

export default IconBaselineTollElement;
