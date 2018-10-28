import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoodBadElement
 * @class IconBaselineMoodBadElement
 * @extends {AoflElement}
 */
class IconBaselineMoodBadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoodBadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mood-bad';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoodBadElement.is, IconBaselineMoodBadElement);

export default IconBaselineMoodBadElement;
