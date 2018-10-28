import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePermMediaElement
 * @class IconBaselinePermMediaElement
 * @extends {AoflElement}
 */
class IconBaselinePermMediaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePermMediaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-perm-media';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePermMediaElement.is, IconBaselinePermMediaElement);

export default IconBaselinePermMediaElement;
