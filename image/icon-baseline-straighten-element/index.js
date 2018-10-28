import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStraightenElement
 * @class IconBaselineStraightenElement
 * @extends {AoflElement}
 */
class IconBaselineStraightenElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStraightenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-straighten';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStraightenElement.is, IconBaselineStraightenElement);

export default IconBaselineStraightenElement;
