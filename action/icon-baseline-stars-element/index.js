import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStarsElement
 * @class IconBaselineStarsElement
 * @extends {AoflElement}
 */
class IconBaselineStarsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStarsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-stars';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStarsElement.is, IconBaselineStarsElement);

export default IconBaselineStarsElement;
