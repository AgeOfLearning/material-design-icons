import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoodElement
 * @class IconBaselineMoodElement
 * @extends {AoflElement}
 */
class IconBaselineMoodElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoodElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mood';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoodElement.is, IconBaselineMoodElement);

export default IconBaselineMoodElement;
