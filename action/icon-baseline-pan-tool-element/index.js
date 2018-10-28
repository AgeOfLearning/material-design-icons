import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePanToolElement
 * @class IconBaselinePanToolElement
 * @extends {AoflElement}
 */
class IconBaselinePanToolElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePanToolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pan-tool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePanToolElement.is, IconBaselinePanToolElement);

export default IconBaselinePanToolElement;
